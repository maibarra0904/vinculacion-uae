

const Paginacion = ({page=1, setPage}) => {

  const handleChangePage = () => {
    
    if(page===1) {
      setPage(2)
    } else {
      setPage(1)
    }
  }

  return (
    <div className="flex flex-row justify-center text-center mt-4 mb-4">
      <div></div>
    <div className="flex justify-center text-center gap-6 p-2 border border-amber-400 bg-white rounded-lg">
        <div className={`${page===1 ? ' bg-indigo-400 text-white' : 'text-indigo-800' } font-bold p-2 rounded-md hover:cursor-pointer`} onClick={handleChangePage}>Paso 1</div>
        <div className={`${page===2 ? ' bg-indigo-400 text-white' : 'text-indigo-800' } font-bold p-2 rounded-md hover:cursor-pointer`} onClick={handleChangePage}>Paso 2</div>
    </div>
    <div></div>
    </div>
  )
}

export default Paginacion