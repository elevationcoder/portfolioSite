import design from './Home.module.css'
import code from './../../img/code.png'
import codeThink from './../../img/Code_thinking.svg'
// import codeEye from './../../img/codeEye.png'
import atom from './../../img/Stylized-atom.svg'

const Home = () => {
    return (
        <div className={design.Home}>
            <div className={design.Container}>
                <h1 className={design.Hello}>Hello world</h1>
                <h1>Welcome to my website!</h1>
            </div>
            <br />
            <img className={design.Code} src={code} alt="code"></img>
            <img className={design.Atom} src={atom} alt="atom"></img>
            {/* <img className={design.CodeEye} src={codeEye} alt="code eye"></img> */}
            <img className={design.ThinkCode} src={codeThink} alt="code think"></img>
        </div>
    );
}

export default Home;