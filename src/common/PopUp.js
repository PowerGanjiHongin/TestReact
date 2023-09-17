export default function PopUp({list, titleNo, setIsOpen }) {
    return(
        <>
        <section className='Pop_Up \n'> 
            {list[titleNo]}
            <button
                onClick ={() => {
                    setIsOpen(false);
                    console.log(titleNo);
                }}>
                Close 
        </button>
        </section>
        
        </>
    )
}