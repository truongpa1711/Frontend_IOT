import React from 'react';

const Profile = () => {
  return (
    <div className="flex max-w-5xl mx-auto gap-4 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Phần trái */}
      <div className="w-1/2 bg-gray-100 p-4 ">
        <img
          src="https://scontent.fsgn14-1.fna.fbcdn.net/v/t39.30808-1/440941487_1413691409506612_2015892722809053071_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEUokO9x1Z6SX-IX_b8BSXwkgXhcIyOgkeSBeFwjI6CRyaF6fc4hGaOoWWu7lkkYR0r2IfIoLRIBMQ5Ldth8lHv&_nc_ohc=gD6Q6_eOXokQ7kNvgFTVXV6&_nc_ht=scontent.fsgn14-1.fna&oh=00_AYCnjodmOChPOR5GLyf74TfDTuLHR-mL5yRFGNCp87A5ow&oe=66C8ABAF"
          alt="Avatar"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <div className='flex gap-2 p-5 items-center'>
<label htmlFor="" className='text-xl'>Họ tên:
          
        </label><p>Phạm Anh Trường</p>
        </div>
        
      </div>

      {/* Phần phải */}
      <div className="w-1/2 p-4 bg-slate-100">
      <img
          src="https://scontent.fsgn14-1.fna.fbcdn.net/v/t39.30808-1/451377621_493810466385204_621653210106938831_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeERPdK9fOVJ1yB8KIGRL0KTmliKXCUh8WKaWIpcJSHxYgUFQqbdvmFaAQDtx4Gz5FKu55puOpqGxFkeWXfadzLr&_nc_ohc=LL0M1W83x9kQ7kNvgFZV0xH&_nc_ht=scontent.fsgn14-1.fna&oh=00_AYC0N6BavBorkiXBa9O3H1nVkV122I-vKlO8_ZOkEZ9dQQ&oe=66C89DA5"
          alt="Avatar"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h2 className="text-xl font-semibold text-center mt-4">Jane Doe</h2>
        <p className="text-gray-600 text-center">Software Engineer</p>
      </div>
    </div>
  );
};

export default Profile;
