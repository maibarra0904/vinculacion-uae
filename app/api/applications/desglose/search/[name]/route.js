import { NextResponse } from 'next/server';
import { Desglose } from '../../../../models';
import { Op } from 'sequelize';

function generateCombinations(keywords) {
    const combinations = [];
    for (let i = 0; i < keywords.length; i++) {
        for (let j = i + 1; j < keywords.length; j++) {
            combinations.push(`${keywords[i]} ${keywords[j]}`);
            combinations.push(`${keywords[j]} ${keywords[i]}`);
        }
    }
    return combinations;
}

export async function GET(req, { params }) {
  try {
    const { name } = await params;
    const decodedName = decodeURIComponent(name);
    const keywords = decodedName.trim().split(" ");

    let conditions = [];

    if (keywords.length > 1) {
        const combinations = generateCombinations(keywords);
        conditions = combinations.map(combination => ({
            student: {
                [Op.like]: `%${combination}%`
            }
        }));
    } else {
        conditions = [{
            student: {
                [Op.like]: `%${decodedName}%`
            }
        }];
    }

    const info = await Desglose.findAll({
        where: {
            [Op.or]: conditions
        }
    });

    return NextResponse.json({ data: info.map(el => el.id) });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
