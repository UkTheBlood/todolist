const WorkingSection = ({ item, clickRomoveButton, isDoneButton }) => {
    return (
        <div key={item.id} className="">
            <h3>{item.title}</h3>
            <p>{item.contents}</p>

            <button onClick={() => clickRomoveButton(item.id)}>삭제하기!</button>

            <button onClick={() => isDoneButton(item.id)}>완료!</button>
        </div>
    )
}

export default WorkingSection;