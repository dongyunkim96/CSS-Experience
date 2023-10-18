import "./Page19.css";

const Page19 = () => {
    return (
        <div className="body19">
        <div className="frame19">
            <div className="center19">
                <input type="radio" id="check-1" name="r" />
                <label className="circle" htmlFor="check-1" id="c1"></label>
                <input type="radio" id="check-2" name="r" />
                <label className="circle" htmlFor="check-2" id="c2"></label>
                <input type="radio" id="check-3" name="r" />
                <label className="circle" htmlFor="check-3" id="c3"></label>
                <div className="active"></div>
                <div className="fondo"></div>
            </div>
        </div>
        </div>
    )
}

export default Page19;