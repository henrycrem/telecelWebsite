import React, { useEffect, useContext } from 'react';
import './nav.css';
import Link from 'next/link';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { useState } from 'react';
import { MyContext } from '../../../context/ThemeContext';

const Nav = (props) => {


    const [navData, setNavData] = useState([]);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const context = useContext(MyContext);

    useEffect(() => {
        setNavData(props.data.data);
    }, [])

    useEffect(() => {
        setIsOpenNav(props.openNav)
    }, [props.openNav])


    const closeNav = () => {
        props.closeNav();
    }

    return (
        <>
            {
                isOpenNav === true && <div className='navbarOverlay' onClick={props.closeNav}></div>
            }
            <div className={`nav d-flex align-items-center ${isOpenNav === true && 'click'}`}>
                <div className='container-fluid'>
                    <div className='row position-relative'>
                        <div className='col-sm-2 part1 d-flex align-items-center'>
                            {/* <Button className='bg-g text-white catTab res-hide'>
                                <GridViewIcon /> &nbsp;Browse All Categories <KeyboardArrowDownIcon /></Button> */}
                        </div>

                        <div className='col-sm-8 part2 position-static'>
                         <nav className={isOpenNav === true ? 'open' : ''}>
  <ul className='list list-inline mb-0'>
    <li className='list-inline-item'>
      <Button><Link href={'/'} onClick={props.closeNav}>HOME</Link></Button>
    </li>

    {/* Other navigation items */}
    {/* Ensure to add the "nav-item" class to each list item */}
    {
      navData !== undefined && navData?.length !== 0 &&
      navData?.map((item, index) => {
        if (item.attributes.title !== undefined) {
          return (
            <li className='list-inline-item nav-item' key={index}>
              <Button onClick={props.closeNav}>
                <Link href={`/category/${item.attributes.title.toLowerCase()}`}
                  onClick={() => {
                    sessionStorage.setItem('cat', item.attributes.title.toLowerCase())
                  }}>
                  {item.attributes.title}
                  <KeyboardArrowDownIcon />
                </Link>
              </Button>
              {
                item.attributes.sub_cats.data !== undefined && item.attributes.sub_cats.data.length !== 0 &&
                <div className='dropdown_menu'>
                  <ul>
                    {
                      item.attributes.sub_cats.data.map((item_, index_) => {
                        return (
                          <li key={index_}>
                            <Button onClick={props.closeNav}>
                              <Link href={`/category/subcat/${item_.id}`}
                                onClick={() => {
                                  sessionStorage.setItem('cat', item.attributes.title.toLowerCase())
                                  sessionStorage.setItem('subCat', item_.attributes.title.toLowerCase())
                                }}>
                                {item_.attributes.title}
                              </Link>
                            </Button>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              }
            </li>
          )
        }
      })
    }

    {/* Internet Plans navigation item */}
    <li className='list-inline-item position-static nav-item'>
      <Button onClick={props.closeNav}>
        <Link href="#">INTERNET PLANS <KeyboardArrowDownIcon /></Link>
      </Button>
      <div className='dropdown_menu megaMenu w-100 ' style={{ height: "700px" }}>
        <div className='row' style={{ height: "500px" }}>
          <div className='flex flex-col'>
            <Link href="#" className='text-black' style={{ color: "black" }}>Home Wi-FI</Link>
            <br />
            <br />
            <Link href="#" className='text-black' style={{ color: "black" }}>Fiber To Home</Link>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </li>

    {/* Devices navigation item */}
    <li className='list-inline-item nav-item'>
      <Button><Link href="#">DEVICES</Link></Button>
    </li>

    {/* Smart Living navigation item */}
    <li className='list-inline-item nav-item'>
      <Button><Link href="#">SMART LIVING</Link></Button>
    </li>

    {/* Digital Products navigation item */}
    <li className='list-inline-item position-static nav-item'>
      <Button onClick={props.closeNav}>
        <Link href="#">DIGITAL PRODUCTS <KeyboardArrowDownIcon /></Link>
      </Button>
      <div className='dropdown_menu megaMenu w-100 ' style={{ height: "700px" }}>
        <div className='row' style={{ height: "500px" }}>
          {/* Content for Digital Products */}
        </div>
      </div>
    </li>

    {/* Careers navigation item */}
    <li className='list-inline-item nav-item'>
      <Button><Link href="#">CAREERS</Link></Button>
    </li>

    {/* Login button (if applicable) */}
    {
      windowWidth < 992 &&
      <>
        {
          context.isLogin !== "true" &&
          <div className='pl-3 pr-3'>
            <br />
            <Link href={'/signIn'}>
              <Button className="btn btn-g btn-lg w-100" onClick={closeNav}>Sign In</Button>
            </Link>
          </div>
        }
      </>
    }

  </ul>
</nav>
   
                        </div>

                        <div className='col-sm-2 part3 d-flex align-items-center'>
                            <div className='phNo d-flex align-items-center ml-auto'>
                                <span><HeadphonesOutlinedIcon  style={{ color: 'red' }}/></span>
                                <div className='danger ml-3'>
                                    <h3 className='text-g mb-0'>+231-886-111-111</h3>
                                    <p className='mb-0 text-g'>24/7 Support Center</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;