import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

class Header extends Component {
    render() {
        const navigate = useNavigate();
        const [isProfile1Open, setProfile1Open] = useState(false);
        
        const onHomeClick = useCallback(() => {
          navigate("/");
        }, [navigate]);
        
        const onAboutClick = useCallback(() => {
          const anchor = document.querySelector("[data-scroll-to='about']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start" });
          }
        }, []);
        
        const openProfile1 = useCallback(() => {
          setProfile1Open(true);
        }, []);
        
        const closeProfile1 = useCallback(() => {
          setProfile1Open(false);
        }, []);
        
        const onRescueButtonClick = useCallback(() => {
          navigate("/rescue-page-1");
        }, [navigate]);
        
        const onAdoptButtonClick = useCallback(() => {
          navigate("/adopt-dog-page");
        }, [navigate]);
        
        const onDonateButtonClick = useCallback(() => {
          navigate("/donation-page");
        }, [navigate]);
        
        const onVolunteerButtonClick = useCallback(() => {
          navigate("/volunteer-page");
        }, [navigate]);
    }
  }

export default Header;