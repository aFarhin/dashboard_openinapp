import React, { useState } from 'react';
import { PlusIcon,WhtuppIcon, MailIcon, InstaIcon, YtIcon,CrossIcon } from '@/util/icons';

const ScheduleCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('basic');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    instaLink: '',
    youtubeLink:''
  });
console.log('Form Data : ', formData)
  const openModal = () => {
    setIsModalOpen(true);
    setCurrentStep('basic');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isPhoneValid = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 'basic') {
      setCurrentStep('social'); // Move to the "Social" step
    } else if (currentStep === 'social') {
      // Handle submission for the "Social" step
     setFormData(formData)
     console.log(setFormData)
      console.log('Form Data:', formData);
      closeModal(); 
    }

  };

  return (
    <div>
     <article className="bg-white rounded-[20px] py-[30px]  lg:px-[40px] px-8 space-y-7 ">
   
     {Object.keys(formData).every((key) => formData[key] === '') ? (
      <div className=' flex justify-center items-center h-[100%]  p-20 flex-col'>
  <button
    className="justify-center items-center flex bg-gray-200 rounded-full border"
    style={{ alignItems: 'center' }}
    onClick={openModal}
  >
    <PlusIcon />
  </button>
  <h2 className='mt-3 justify-center items-center'>Add Profile</h2>
</div>
  ) : (
    <>
    {isModalOpen=== false ? 
    
    (  <>
    {formData.name && (
        <div>
          <strong style={{fontSize:'24PX', fontWeight:'600'}}>{formData.name}</strong>
        </div>
      )}
 
      
    <div className='w-full flex justify-between h-[30%]  p-5'>
      <div className='flex flex-col gap-9  p-2 justify-center text-center'>
     { formData.phoneNumber &&(
      <div className='flex flex-row text-center justify-start items-center'>
    <button className="mr-2 rounded-full bg-[#E9F9EB] p-2">
      
      <WhtuppIcon/>
      </button>
      <div>
      <h3 className=' text-xl justify-start'>{formData.phoneNumber}</h3></div>
      </div>
  )}
  {
    formData.email &&(
      <div className='flex flex-row text-center justify-start items-center'>
      <button className="mr-2 rounded-full bg-[#EBE6F9] p-2">
      <MailIcon/>
      </button>
      <h3 className=' text-lg'>{formData.email}</h3>
      </div>)
  }
      
      </div>
      
      <div className='flex flex-col gap-9 p-2'>
      {formData.instaLink &&(
        <div className='flex flex-row text-center justify-start items-center'>
        <button className="mr-2 rounded-full bg-[#FFE9E9] p-2">
      <InstaIcon/>
      
      </button>
      <h3 className=' text-lg'>{formData.instaLink}</h3>
      </div>

      )}
      {formData.youtubeLink &&(
        <div className='flex flex-row text-center justify-start items-center '>
        <button className="mr-2 rounded-full bg-[#FFE9E9] p-2">
        <YtIcon/>
        </button>
      <div>
      <h3 className=' text-lg'>{formData.youtubeLink}</h3>
      </div>
      
         </div>
      )}
      

      </div>

    </div></>
   ):<div className='bg-white w-full h-[100%] p-20'></div>}
     
    </>
  )}
</article>


      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
          <div className='flex flex-row justify-between'>
            <h2 className=' justify-items-start font-bold my-3'>Add New Profile</h2>
            <button onClick={()=>setIsModalOpen(false)}>  <CrossIcon/></button>
          </div>
            <form>
            {currentStep === 'basic' && (

                <div className="form-column">
                  <div className="flex flex-row justify-evenly my-2  font-semibold">
                    <button onClick={() => setCurrentStep('basic')} className={currentStep === 'basic' ? 'active-button' : ''} >Basic Contact</button>
                    <button onClick={() => setCurrentStep('social')} className={currentStep === 'social' ? 'active-button' : ''}>Social</button>
                  </div>
                  <div className='flex-col'>
                <label style={{color:'black', fontWeight:'400' , fontSize:'16px',marginRight:'65%' }}>Enter Name*</label>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Eg. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                </div>
                <div>
                  <label style={{color:'black', fontWeight:'400' , fontSize:'16px',marginRight:'65%' }}>Enter Email*</label>
                  <input
                  className="input-field"
                  type="email"
                  placeholder="Eg. John@xyz.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                </div>
               <div>
                <label style={{color:'black', fontWeight:'400' , fontSize:'16px',marginRight:'65%' }}>Enter Phone*</label>
                <input
                  className="input-field"
                  type="tel"
                  placeholder="Eg. 9024566868"
                  value={formData.phoneNumber}
                  onChange={(e) => {
    const value = e.target.value;
    
      setFormData({ ...formData, phoneNumber: value });
    
  }}
                  required
                />
               </div>

                 
                </div>
              )}
              {currentStep === 'social' && (
                <div className="form-column">
                  <div className="flex flex-row justify-evenly font-semibold">
                    <button onClick={() => setCurrentStep('basic')}  className={currentStep === 'basic' ? 'active-button' : ''}>Basic Contact</button>
                    <button disabled  className={currentStep === 'social' ? 'active-button' : ''}>Social</button>
                  </div>

                  {/* Social inputs */}
                  <div className='my-4'>
                    <label style={{ color: 'black', fontWeight: '400', fontSize: '16px', marginRight: '50%' }}>Instagram Link(Optional)</label>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Eg. https://example.com"
                      value={formData.instaLink}
                      onChange={(e) => setFormData({ ...formData, instaLink: e.target.value })}
                    />
                  </div>

                  <div  className='my-4' >
                    <label style={{ color: 'black', fontWeight: '400', fontSize: '16px', marginRight: '50%' }}>Youtube Link (Optional)</label>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Eg. https://example.com"
                      value={formData.youtubeLink}
                      onChange={(e) => setFormData({ ...formData, youtubeLink: e.target.value })}
                    />
                  </div>
                </div>
              )} 

             
              {currentStep === 'basic' ?
               <div className="modal-buttons">
                <button className="modal-button"onClick={handleFormSubmit}>
                 Next
                </button>
              </div>
               : 
               <div className="modal-buttons">
                <button className="modal-button" onClick={handleFormSubmit}>
                 Done
                </button>
              </div>}
             
            </form>
           
          </div>
        </div>
      )}
      <style jsx>{`
     
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          width: 80%;
          max-width: 400px;
          
        }

        .input-field {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .modal-buttons {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
          
       
        }

        .modal-button {
          padding: 10px 20px;
          border: 1;
          border-radius: 5px;
          cursor: pointer;
          background-color:#3E84F8;
          color: #FFFFFF;
        

        }
        .active-button {
  border-bottom: 3px solid #3E84F8;
}
      `}</style>
    </div>
  );
};

export default ScheduleCard;

