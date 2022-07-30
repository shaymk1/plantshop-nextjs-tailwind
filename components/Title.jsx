import React from 'react'

const Title = ({children}) => {
  return (
		<div>
			<h1 className="uppercase text-4xl font-montserrat tracking-widest text-[#be95c4] font-bold  text-center  pb-4">
				{children}
			</h1>
		</div>
	);
}

export default Title