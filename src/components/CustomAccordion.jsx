import * as React from 'react';
import { oddChecker } from '../utilities/helperFuncs';

const CustomAccordion = ({
  data, panel, currentPanel,
  setCurrentPanel, collapse, expand
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
                  ? <>&nbsp;</>
                  : (
                    <>
                      {
                        panel === currentPanel
                          ? collapse || '-'
                          : expand || '+'
                      }
                    </>
                  )
              }
            </div>
          </div>
          <div className={currentPanel === panel ? 'custom-box-2 details' : ' bg-theme-faint-1 text-theme-faint-1'}>
            <div>
              {
                data.details
              }
              <div className={currentPanel === panel ? '' : 'd-none'}>
                <div className="text-info">
                  {`Your answer: ${data.answer}`}
                  {
                    collapse === '-'
                      ? <span className="text-danger font-title"> &times;</span>
                      : <span className="text-success font-title"> &#10003;</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
