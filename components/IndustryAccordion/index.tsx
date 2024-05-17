import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Image from 'next/image';
import AccordionWrapper from '../../common/AccordionWrapper';
import SectorOptions from '../SectorOptions';
import { countSelectedOptions } from '../../helpers';
import { useState } from 'react';
import useDefaultExpandedSector from '../../hooks/useDefaultExpandedSector';
import { arrowDown, arrowDownGray } from '../../public/summary';
import { pagesWhereDropdownDisabled } from '../../constants';
import useGetPage from '../../hooks/useGetPage';

import styles from './IndustryAccordion.module.scss';

interface IIndustryAccordionProps {
    delayed?: boolean | undefined;
    industrySectors: ISector[];
  }

const IndustryAccordion = ({ delayed, industrySectors }: IIndustryAccordionProps) => {
  const currentPage = useGetPage();  
    const numberOfSelectedSectors =
      countSelectedOptions(industrySectors, 'selected') !== 0
        ? countSelectedOptions(industrySectors, 'selected')
        : null;
  
    const [expanded, setExpanded] = useState(industrySectors[0].id);
  
    // @ts-ignore
    const handleExpansion = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    const disable =
    pagesWhereDropdownDisabled.includes(String(currentPage)) ||
    numberOfSelectedSectors === null;

    useDefaultExpandedSector(industrySectors, setExpanded);

  return (
    <Accordion
      disabled={disable}
      style={{ color: delayed ? '#0F0F0F' : 'none' }}
      sx={(theme) => ({
        backgroundColor: 'rgba(0, 0, 0, 0.87) !important',
        color: '#FFF',
        marginBottom: '10px',
      })}
    >
      <AccordionSummary
        expandIcon={
          <Image
            src={numberOfSelectedSectors === null ? arrowDownGray : arrowDown}
            alt={'arrow'}
            width={24}
            height={24}
          />
        }
        sx={{
          display: delayed ? 'none' : 'flex',
        }}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <div className={styles.accordionSummary}>
          <h3>Отрасль</h3>
          <span>{numberOfSelectedSectors}</span>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {industrySectors?.map((sector, index) => {
          const selectedOptionsLength = sector.options.filter(
            (option) => option.selected
          ).length;

          if (selectedOptionsLength === 0) return;

          return (
            <AccordionWrapper
              styles={{
                accordionDetailsHeight: 'unset',
                accordionDetailsMaxHeight: '532px',
              }}
              expanded={expanded}
              handleExpansion={handleExpansion}
              data={sector}
              key={index}
            >
              <SectorOptions fromSideNav sectorOptions={sector.options} />
            </AccordionWrapper>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default IndustryAccordion;
