import React from 'react'

const UserDetails = () => {

    const userProfile = {
      name: "Kungfu Kenny",
      phone: "08123215342",
      email: "kungfukenny102@gmail.com",
      gender: "male",
      marital: "single",
      children: "2",
      residence: "Own House",
      username: "kungfuMaster",
      organization: "UN",
      guarantor: [
        {
            name: "Ninja",
            phone: "08123112387",
            relationship: "Bro",
            email: "ninja1002@gmail.com"
        }
      ]
    }

    return (
        <div className="p-10 bg-white rounded-md shadow-xl mt-20 text-sm">
          <div>
            <h4 className='text-xl font-semibold mb-5'>Personal Information</h4>
    
            <div className="flex flex-col md:grid grid-cols-5 gap-5 pb-3">
              <div>
                <h6>FULL NAME</h6>
                <p className='font-semibold mt-2'>{userProfile?.name}</p>
              </div>
    
              <div>
                <h6>PHONE NUMBER</h6>
                <p className='font-semibold mt-2'>{userProfile?.phone}</p>
              </div>
    
              <div>
                <h6>EMAIL ADDRESS</h6>
                <p  className='font-semibold mt-2'>{userProfile?.email}</p>
              </div>
    
              <div>
                <h6>BVN</h6>
                <p  className='font-semibold mt-2'>{userProfile?.phone}</p>
              </div>
    
              <div>
                <h6>GENDER</h6>
                <p  className='font-semibold mt-2'>{userProfile?.gender}</p>
              </div>
    
              <div>
                <h6>MARITAL STATUS</h6>
                <p  className='font-semibold mt-2'>{userProfile?.marital}</p>
              </div>
    
              <div>
                <h6>CHILDREN</h6>
                <p  className='font-semibold mt-2'>{userProfile?.children}</p>
              </div>
    
              <div>
                <h6>TYPE OF RECIDENCE</h6>
                <p className='font-semibold mt-2'>{userProfile?.residence}</p>
              </div>
            </div>
    
            <hr />
          </div>
    
          <div>
            <h4 className='text-xl font-semibold my-5'>Education and Employment</h4>
    
            <div className="flex flex-col md:grid grid-cols-4 gap-5 pb-3">
              <div>
                <h6>LEVEL OF EDUCATION</h6>
                <p className='font-semibold mt-2'>B.Sc</p>
              </div>
    
              <div>
                <h6>EMPLOYMENT STATUS</h6>
                <p className='font-semibold mt-2'>Employed</p>
              </div>
    
              <div>
                <h6>SECTOR OF EMPLOYMENT</h6>
                <p className='font-semibold mt-2'>Fintech</p>
              </div>
    
              <div>
                <h6>DURATION OF EMPLOYMENT</h6>
                <p className='font-semibold mt-2'>2 years</p>
              </div>
    
              <div>
                <h6>OFFICE EMAIL</h6>
                <p className='font-semibold mt-2'>
                  {userProfile?.username}@{userProfile?.organization}.com
                </p>
              </div>
    
              <div>
                <h6>MONTHLY INCOME</h6>
                <p className='font-semibold mt-2'>$5,000 - $10,000</p>
              </div>
    
              <div>
                <h6>LOAN REPAYMENT</h6>
                <p className='font-semibold mt-2'>$1,000</p>
              </div>
            </div>
    
            <hr />
          </div>
    
          <div>
            <h4 className='text-xl font-semibold my-5'>Socials</h4>
    
            <div className="flex flex-col md:flex-row gap-10 pb-3 md:gap-20">
              <div>
                <h6>TWITTER</h6>
                <p className='font-semibold mt-2'>@{userProfile?.username}</p>
              </div>
    
              <div>
                <h6>FACEBOOK</h6>
                <p className='font-semibold mt-2'>{userProfile?.name}</p>
              </div>
    
              <div>
                <h6>INSTAGRAM</h6>
                <p className='font-semibold mt-2'>@{userProfile?.username}</p>
              </div>
            </div>
    
            <hr />
          </div>
    
          <div>
            <div>
              <h4 className='text-xl font-semibold my-5'>Guarantor</h4>
              {userProfile?.guarantor.map((guarantor, index) => (
                <div key={index} className="flex flex-col md:grid grid-cols-4 gap-5 pb-3">
                  <div>
                    <h6>FULL NAME</h6>
                    <p className='font-semibold mt-2'>{guarantor.name}</p>
                  </div>
    
                  <div>
                    <h6>PHONE NUMBER</h6>
                    <p className='font-semibold mt-2'>{guarantor.phone}</p>
                  </div>
    
                  <div>
                    <h6 className='font-semibold mt-2'>EMAIL ADDRESS</h6>
                    <p>{guarantor.email}</p>
                  </div>
    
                  <div>
                    <h6 className='font-semibold mt-2'>RELATIONSHIP</h6>
                    <p>{guarantor.relationship}</p>
                  </div>
    
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default UserDetails