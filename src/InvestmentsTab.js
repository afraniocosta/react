import React, { useState, useEffect } from 'react'
import data from './investmentsTab.json'

import './css/cor-btn.css'

function InvestmentsTab()  {
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(()=>{
    setCurrentItem() 
  },[currentItem])

    

    const PAGE_TITLE = document.title.toLowerCase()
    return (
      <>
        <div className='navInvestmentsTab shadow py-3 px-3 mt-5 rounded-3'>
          <div className='d-flex pb-3'>
            {data.map((item, index) => (
              <button className={`btnInvestments col mw-100 rounded-3 fs-14 mx-2 ${currentItem === index ? 'btn-orange' : 'blue'}`}
                onClick={(evt) => setCurrentItem({ currentItem: index })}
              >{item.buttonTab}</button>
            ))}
          </div>
          {data.map((item, index) => (
            <div className={`px-2 ${currentItem === index ? 'd-block' : 'd-none'}`}>
              <div className='row'>
                {item.children.map((item, index) => (
                  <a id={item.id} href={item.link} key={item.title} className='col-12 col-md-6 col-lg-3 mt-3'>
                    <div className={`col-12 border rounded-3 bg-products ${PAGE_TITLE.includes(item.id) ? 'active' : ''}`}>
                      <h3 className='fs-24 my-4'>{item.title}</h3>
                      <p className='fs-14 description-text'>{item.description}</p>
                      {item.rescue && item.investorMoment
                        ? <ul className='list-unstyled d-none d-lg-block'>
                          <li className='d-flex align-items-center mt-4 pl-3 pt-2 border rounded-3'>
                            <p className='ml-3 fs-14 lh-20'>Momento investidor<br />
                              <span className='fs-16 fw-400'>{item.investorMoment}</span>
                            </p>
                          </li>
                          <li className='d-flex align-items-center mt-3 pl-3 pt-2 border rounded-3'>
                            <icon width='40' height='40' icon='check' directory='layout' />
                            <p className='ml-3 fs-14 lh-20'>Resgate<br />
                              <span className='fs-16 fw-400'>{item.rescue}</span>
                            </p>
                          </li>
                        </ul>
                        : ''}
                    </div>
                  </a>
                ))
                }
              </div>
            </div>
          ))
          }
        </div>
      </>
    )
  }

export default (InvestmentsTab)