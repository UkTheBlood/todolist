const DoneSection = ({ item, clickRomoveButton, clickCancelButton }) => {
    return (
        <div key={item.id} className="">
            <h3>{item.title}</h3>
            <p>{item.contents}</p>

            <button onClick={() => clickRomoveButton(item.id)}>삭제하기!</button>

            <button onClick={() => clickCancelButton(item.id)}>취소</button>
        </div>
    )
}

export default DoneSection;