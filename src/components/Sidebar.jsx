import React from 'react';
import { useNavigate } from 'react-router-dom';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';

const Sidebar = () => {
  const navigate = useNavigate(); 

  const sidebarData = [
    { title: "Start Game", icon: <PlayCircleFilledWhiteRoundedIcon />, link: "/game" },
    { title: "Check History", icon: <HistoryRoundedIcon />, link: "/CheckHistory" },
  ];

  return (
    <div className="Sidebar">
      <ul>
        {sidebarData.map((item, key) => (
          <li
            key={key}
            className="one-row"
            onClick={() => navigate(item.link)}
          >
            <div className="icon">{item.icon}</div>
            <div>{item.title}</div>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
