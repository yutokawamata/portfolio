import instaicon from '../assets/instaicon.png'
import '../style/footer.css'

function Footer() {
  return (
    <div className="footer">
        <a href="">
            <img src={instaicon} className="icon" alt="instaicon" />
        </a>
        <div className="footer-menu">
            <p><a href="#works">works</a></p>
            <p><a href="#about">about</a></p>
            <p><a href="#skill">skill</a></p>
            <p><a href="#contact">contact</a></p>
        </div>
    </div>
  )
}

export default Footer
