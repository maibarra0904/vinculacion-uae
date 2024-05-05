

const Paginacion = ({page=1, setPage}) => {
  return (
    <div className="flex justify-center text-center gap-4">
        <div className={`${page===1 ? ' bg-amber-400' : '' } p-2 rounded-md hover:cursor-pointer`} onClick={setPage}>Paso 1</div>
        <div className={`${page===2 ? ' bg-amber-400' : '' } p-2 rounded-md hover:cursor-pointer`} onClick={setPage}>Paso  2</div>
    </div>
  )
}

export default Paginacion