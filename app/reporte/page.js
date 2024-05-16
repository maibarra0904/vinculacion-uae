'use client'
import Layout from "@/components/ui/Layout"
import React, { useEffect, useState } from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import axios from "axios";
import ExportToExcel from "@/components/links/ExportExcel";
import UserAccess from "@/components/user/UserAccess";

const Reporte = () => {
    
    const fileName = 'reporte'
    const [apiData, setApiData] = useState(null)
    const [passOk, setPassOk] = useState(false)

    const pass = 'Uae2024*'

    useEffect(() => {
        const getData = async() => {
            
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND);
                setApiData(response?.data.data)
            } catch (error) {
                console.log(error)
            }
            
        }
    
        getData()
    },[])


  return (
    <Layout>
        {
            passOk ? <ExportToExcel apiData={apiData} fileName={fileName} /> : <UserAccess pass={pass} setPassOk={setPassOk} />
        }
        
    </Layout>
  )
}

export default Reporte