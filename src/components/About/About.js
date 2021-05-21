import design from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/Profile1-pic.JPG'

const About = () => {
    return (
        <div className={design.AboutMe}>
            <PageHeader title={'About Me'} />
            <div className={design.Container}>
                <div className={design.Text}>
                    <h2>Hello I'm Ian</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem ad est, nihil consequuntur dolor quam perferendis
                        tempore possimus ab harum dolorum praesentium in doloribus a!
                        Corrupti quidem, dolores eius modi tempore tenetur aut quod
                        placeat praesentium magnam ea ipsum necessitatibus voluptatum?
                        Asperiores deserunt suscipit, consequuntur quos cumque tempore,
                        necessitatibus nostrum quae odio mollitia sed, vero iste accusamus
                        magnam doloribus ut magni excepturi voluptatem quam perferendis
                        ad ab aut itaque architecto. Nobis sit, deleniti expedita consequuntur
                        nam dolores necessitatibus vero corrupti dolor possimus sequi fugiat
                        explicabo similique a inventore asperiores eos voluptatibus doloremque
                        quas nisi facere est consequatur! Perspiciatis, labore quisquam!
                    </p>
                </div>
                <div className={design.Photo}>
                    <img className={design.Me} src={me} alt="me"></img>
                </div>
            </div>
        </div>
    );
}

export default About