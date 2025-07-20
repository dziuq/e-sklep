import {DirectoryItemContainer, BackgroundImage, Body} from "./directory-item.styles.jsx";
import {useNavigate} from 'react-router-dom'
const DirectoryItem = ({ category }) => {

  const { imageSrc, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)

  return(
    <DirectoryItemContainer onClick={onNavigateHandler}>
    <BackgroundImage src={imageSrc} alt={title} />
    <Body>
      <h2>{title}</h2>
    </Body>
  </DirectoryItemContainer>
  );
};

export default DirectoryItem;
