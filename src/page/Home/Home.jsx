import { useNavigate } from 'react-router-dom';
import { Button, Div } from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Button type="button" onClick={() => navigate('/catalog')}>
        Go Catalog
      </Button>
    </Div>
  );
};

export default Home;
