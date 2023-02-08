import DoneSection from "./DoneSection";
import WorkingSection from "./WorkingSection";

const TodoList = ({clickRomoveButton, isDoneButton, todo, clickCancelButton}) => {
    return (
        <div>
            <div>
                <h1>Working...</h1>
                {
                    todo.filter(function (work) {
                        return work.done === false
                    }).map(item => {
                        return (
                            <WorkingSection
                                key={item.id}
                                item={item}
                                clickRomoveButton={clickRomoveButton}
                                isDoneButton={isDoneButton}
                            />
                        )
                    })
                }
            </div>

            {/* Done! */}
            <div>
                <h1>Done!</h1>
                {
                    todo.filter(function (work) {
                        return work.done === true
                    }).map(item => {
                        return (
                            <DoneSection
                                key={item.id}
                                item={item}
                                clickRomoveButton={clickRomoveButton}
                                clickCancelButton={clickCancelButton}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoList;