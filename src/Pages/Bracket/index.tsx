// import * as S from './style';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BadmintionBracket from './Badminton';

const Bracket = () => {
  const { sport } = useParams();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [sportName, setSportName] = useState<string | undefined>('');

  useEffect(() => {
    if (!(sport === 'soccer' || sport === 'badminton' || sport === 'volleyball')) {
      setNotFound(true);
    }
    if (sport === 'soccer') {
      setSportName('축구');
    } else if (sport === 'badminton') {
      setSportName('배드민턴');
    } else if (sport === 'volleyball') {
      setSportName('배구');
    }
  }, [sport]);

  useEffect(() => {
    if (notFound) {
      navigate('/bracket-unknown');
    }
  }, [notFound, navigate]);

  return (
    <div>
      {sportName}
      {sportName === '배드민턴' && <BadmintionBracket />}
    </div>
  );
};

export default Bracket;
