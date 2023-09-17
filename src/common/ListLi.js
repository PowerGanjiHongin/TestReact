export default function ListLi( {list, setIsOpen, setTitleNo, i, delList} ){
    return(
        <>
            <li
                >
                <p
                onClick = {()=>{
                    setIsOpen(true);
                    setTitleNo(i);
                    
                }}>{list} </p>
                <i class="fa-solid fa-trash-can"
                    onClick={(e) =>{
                        setIsOpen(false);
                        delList(i);
                    }}>
                </i>
            </li>
        </>
    )
}