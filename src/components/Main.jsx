import ItemListContainer from "./ItemListContainer"

/*      COMPONENTE HIJO      */

function Main() {
  return (
    <>
        <div className="MainStyles">
          
          <ItemListContainer greeting={"Lista de articulos disponibles"}/>

        </div>  
    </>     
  )
}

export default Main