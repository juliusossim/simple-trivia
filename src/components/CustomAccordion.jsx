import * as React from 'react';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/all';
// import Box from '@material-ui/core/Box';

const CustomAccordion = ({
                             data, removeAccordion, panel, currentPanel,
                             setCurrentPanel, className, collapse, expand
                         }) => {
    const handleClick = () => {
        setCurrentPanel(panel === currentPanel ? 0 : panel);
    };
    return (
        <div className="px-3">
            {/* eslint-disable-next-line max-len */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className="pointer border-bottom mb-2" onClick={handleClick}>
                <div className="d-flex bg-theme-faint-1 p-3">
                    <div className="">
                        <div className="mr-2 font-title-small">
                            {
                                panel === currentPanel
                                    ? collapse || '-'
                                    : expand || '+'
                            }
                        </div>
                    </div>
                    <div className="mt-md-1">
                        {data.name}
                    </div>
                    {/* <div className="ml-2"> */}
                    {/*  {removeAccordion} */}
                    {/* </div> */}
                </div>
            </div>
            <div className={currentPanel === panel ? 'custom-box-2' : 'd-none'}>
                {data.details}
            </div>
        </div>
    );
};

export default CustomAccordion;
