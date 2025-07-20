import {DirectoryItemContainer, BackgroundImage, Body} from "./directory-item.styles.jsx";
import {useNavigate} from 'react-router-dom'
const DirectoryItem = ({ category }) => {

  const { imageSrc, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)

  return(
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl = {imageSrc}
      />
      <Body>
        <h2>{title}</h2>
        <p>Zamów teraz</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
