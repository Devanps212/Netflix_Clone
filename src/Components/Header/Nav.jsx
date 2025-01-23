import './Nav.css';

function Nav() {
  return (
    <div className='navbar'>
      <ul className="left-menu">
        <li><img className='logo' src="/assets/navbar/pngwing.com (1).png" alt="Netflix logo"/></li>
        <li style={{marginleft: '26px'}}>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Recently Added</li>
        <li>My List</li>
      </ul>
      <ul className="right-menu">
        <li><img className='search' src="/assets/navbar/search-13-256.png" alt='Search Icon'/></li>
        <li>Kids</li>
        <li>DVD</li>
        <li><img className='bell' src="/assets/navbar/[CITYPNG.COM]White Notification Bell Icon Transparent Background - 700x700.png" alt="Bell Icon"/></li>
        <li><img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar'/></li>
      </ul>
    </div>
  );
}

export default Nav
