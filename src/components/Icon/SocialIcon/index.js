import Button from "@/components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcon = ({ icon, bgColor, href, ...rest }) => {
  return (
    <Button
      size={"30px"}
      bgColor={bgColor}
      onClick={() => href && window.open(href, "_blank")}
      {...rest}>
      <FontAwesomeIcon icon={icon} size="16px"></FontAwesomeIcon>
    </Button>
  )
}

export default SocialIcon
