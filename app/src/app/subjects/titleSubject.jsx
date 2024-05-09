import React from 'react';

const TitleSubject = ({ title }) => {
  return (
    <main className="mt-9 ml-6">
      <h2 className="text-custom-gray4 text-sm-12">{ title }</h2>
        <span>
          <hr className="border-custom-gray3" />
        </span>
    </main>
  );
};

export default TitleSubject;