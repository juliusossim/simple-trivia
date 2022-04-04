import * as React from 'react';
import {Fragment} from "react";
import {oddChecker} from "../utilities/helperFuncs";
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
            <div className="pointer mb-2" onClick={handleClick}>
                <div className="d-flex p-3 text-theme-faint-1">
                    <div style={{ marginRight: '1.5rem' }}>
                        <div className="font-title">
                            {
                                oddChecker(panel)
                                ? <Fragment>&nbsp;</Fragment>
                                    : (
                                        <Fragment>
                                            {
                                                panel === currentPanel
                                                    ? collapse || '-'
                                                    : expand || '+'
                                            }
                                        </Fragment>
                                    )
                            }
                        </div>
                    </div>
                    <div className={currentPanel === panel ? 'custom-box-2 font-title-small' : ' bg-theme-faint-1 text-theme-faint-1'}>
                        {
                            <div>
                                {
                                    data.details
                                }
                                <div className={currentPanel === panel ? '' : 'd-none'}>
                                    <div className="text-info">
                                {`Your answer: ${data.answer}`}
                            </div>
                                    <div className={collapse === '-' ? 'text-danger' : 'text-success'}>
                                        {
                                            collapse === '-'
                                                ? <Fragment>wrong</Fragment>
                                                : <Fragment>correct</Fragment>
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomAccordion;
