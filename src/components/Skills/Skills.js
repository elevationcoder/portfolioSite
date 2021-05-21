import design from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import coding from './../../img/coding.svg'

const listTitleStyle = { fontWeight: 900, color: '#981FE8', marginBottom: '4px' }

const backendSkills =
    <ul>
        <li style={listTitleStyle}>BACKEND</li>
        <li>Ruby | Ruby on Rails | Sinatra</li>
        <li>C# | ASP.NET Core | ASP.NET MVC</li>
    </ul>

const serverLessSkills =
    <ul>
        <li style={listTitleStyle}>SERVERLESS SKILLS</li>
        <li>MongoDb</li>
    </ul>

const frontendSkills =
    <ul>
        <li style={listTitleStyle}>FRONTEND</li>
        <li>ReactJS | HTML | CSS | Redux</li>
    </ul>

const ideSkills =
    <ul>
        <li style={listTitleStyle}>IDE SKILLS</li>
        <li>Visual Studio | Visual Studio Code</li>
    </ul>

const otherSkills =
    <ul>
        <li style={listTitleStyle}>OTHER SKILLS</li>
        <li>React Dev Tools | Postman</li>
        <li>Git | GitHub | JSON | RESTful API</li>
    </ul>

const totalSkills =
    [
        backendSkills, serverLessSkills, frontendSkills, ideSkills, otherSkills
    ]

const Skills = () => {
    return (
        <div className={design.Skills}>
            <PageHeader title={'My Skills'} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat veritatis asperiores sunt et nam magnam quasi,
                est possimus nesciunt blanditiis libero quis porro ipsum
                itaque soluta dolores officia optio quaerat reiciendis non in?
                Facere, modi? Magni, natus modi placeat voluptates asperiores,
                animi iusto, ut voluptatum inventore earum perferendis autem ea.
            </p>

            <div className={design.Container}>
                <img className={design.Coding} src={coding} alt={"Coding"}></img>
                {totalSkills.map(skills => {
                    return (
                        <div className={design.List}>
                            {skills}
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Skills;