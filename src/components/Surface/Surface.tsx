import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import styles from 'src/styles';
import Island from 'src/assets/surface/island-base.svg';
import Sands from 'src/assets/surface/sands.svg';
import PalmTrunk from 'src/assets/surface/palm-trunk.svg';
import PalmLeaves from 'src/assets/surface/palm-leaves.svg';
import { rem, rgba } from 'polished';

// const b = keyframes`
//   0%{
//     /* background-color: transparent; */
//     background: radial-gradient(#80deea, #14e3fa 60%);

//   }

//   100% {
//     background: radial-gradient(black, #14e3fa 60%);

//   }
// `;

enum DayPeriod {
  Morning = 'morning',
  Day = 'day',
  Afternoon = 'afternoon',
  Evening = 'evening',
  Night = 'night',
}

const SurfacePlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${styles.colors.bgUnderwaterLight};
  /* background-color: ${styles.colors.white}; */
  background-color: #80deea;
  background-color: #14e3fa;
  background: radial-gradient(#80deea, #14e3fa 60%);
  /* animation: ${b} linear 5s forwards; */

  /* background: linear-gradient(180deg, #14E3FA 0%, #80DEEA  47%, #14E3FA 100%); */
  z-index: 10000;
`;

const a = keyframes`
  0%{
    /* background-color: transparent; */
    opacity: 0;
    background-color: #fed800;
  }

  25%{
    opacity: 0.2;
    background-color: #ff6f01;
  }

  50% {
    background-color: #fd2f24;
    opacity: 0.4;
  }

  75% {
    background-color: #811d5e;
    opacity: 0.5;
  }

  100% {
    background-color: black;
    opacity: 0.9;
  }
`;

const morningBackground = css`
  opacity: 0.4;
  background-color: #ff6f01; /*bardziej troche szarego*/
`;

const dayBackground = css`
  background-color: transparent;
  opacity: 1;
`;

const afterNoonBackground = css`
  background-color: #fd2f24;
  opacity: 0.5;
`;

const eveningBackground = css`
  background-color: #811d5e;
  opacity: 0.6;
`;

const nightBackground = css`
  background-color: black; /*niebieska bardziej niz szara*/
  opacity: 0.9;
`;

const backgroundMap = {
  [DayPeriod.Day]: dayBackground,
  [DayPeriod.Afternoon]: afterNoonBackground,
  [DayPeriod.Evening]: eveningBackground,
  [DayPeriod.Morning]: morningBackground,
  [DayPeriod.Night]: nightBackground,
};

const Overlay = styled.div<{ period: DayPeriod }>`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: #fd2f24;

  opacity: 0.4;
  background-color: #ff6f01;

 background-color: #fd2f24;
  opacity: 0.5;

  background-color: #811d5e;
  opacity: 0.6;

  background-color: black;
  opacity: 0.9; */
  transition: background-color 1s ease-in-out, opacity 1s ease-in-out;

  ${({ period }) => backgroundMap[period]};
  /* landing, stack, bio, about, contact */

  /* animation: ${a} linear 3s forwards; */
  /* ${({ isVisible }) => `background-color: orange`}; */
`;
const WaterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: ${styles.colors.bgUnderwaterDark};
  /*
  background: linear-gradient(
    to top,
    ${styles.colors.bgUnderwaterLight},
    ${styles.colors.bgUnderwaterDark}
  ); */
  /* > svg {
    width: 100%;
    height: 100%;
  } */
  background: radial-gradient(
    ${styles.colors.bgUnderwaterLight},
    ${styles.colors.bgUnderwaterDark} 60%
  );
`;
const IslandWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  width: 30%;
  height: 90px;
  transform: translateX(-50%);
  > svg {
    width: 100%;
    height: 100%;
  }
`;
const PalmWrapper = styled.div`
  position: absolute;
  bottom: 130px;
  left: 50%;
  width: 50px;
  height: 150px;
  transform: translateX(-50%);
  > svg {
    width: 100%;
    height: 100%;
  }
`;
const PalmLeavesWrapper = styled.div`
  /* background-color: blue; */
  position: absolute;
  bottom: 225px;
  left: 51%;
  width: 100px;
  height: 100px;
  transform: translateX(-50%);
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const Example = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 300px;
  height: 400px;
  /* background-color: ${rgba(100, 100, 100, 0.1)}; */
  /* box-shadow: 3px 3px 10px ${rgba(0, 0, 0, 0.6)}; */

  font-family: ${styles.fonts.standard};
  font-weight: 600;
  letter-spacing: 1px;

  color: #888;
  /* border: 2px solid rgba(170, 170, 170, 0.4); */
  border: 1px solid black;

  /* border-radius: 5px; */
  background-color: ${rgba('#fcba03', 0.6)};
  transform: translateY(100%);
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  padding: 10px;
  @media ${styles.breakpoints.smUp} {
    width: ${rem(250)};
    font-size: ${rem(25)};
  }

  /* box-shadow: 2px 2px 15px rgba(120, 255, 87, 0.2); */
`;

const PalmWrapper2 = styled.div`
  position: absolute;
  bottom: 105px;
  left: 640px;
  width: 100px;
  height: 250px;
  transform: translateX(-50%);
  > svg {
    width: 100%;
    height: 100%;
  }
`;
const PalmLeavesWrapper2 = styled.div`
  /* background-color: blue; */
  position: absolute;
  bottom: 200px;
  left: 640px;
  width: 200px;
  height: 200px;
  transform: translateX(-50%);
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Surface = () => {
  const [dayPeriod, setDayPeriod] = useState<DayPeriod>(DayPeriod.Day);

  return (
    <SurfacePlaceholder>
      <WaterWrapper>
        {/* <Water /> */}
        {/* <Content /> */}
      </WaterWrapper>
      <IslandWrapper>
        <Island />
      </IslandWrapper>
      <IslandWrapper>
        <Sands />
      </IslandWrapper>
      <PalmWrapper>
        <PalmTrunk />
      </PalmWrapper>
      <PalmLeavesWrapper>
        <PalmLeaves />
      </PalmLeavesWrapper>
      {/* <PalmWrapper2>
        <PalmTrunk />
      </PalmWrapper2> */}
      {/* <PalmLeavesWrapper2>
        <PalmLeaves />
      </PalmLeavesWrapper2> */}
      {/* <Example>test</Example> */}
      <Overlay period={dayPeriod} />

      <ButtonsWrapper>
        <button onClick={() => setDayPeriod(DayPeriod.Day)}>Day</button>
        <button onClick={() => setDayPeriod(DayPeriod.Night)}>Night</button>

        <button onClick={() => setDayPeriod(DayPeriod.Evening)}>Evening</button>
        <button onClick={() => setDayPeriod(DayPeriod.Morning)}>Morning</button>
        <button onClick={() => setDayPeriod(DayPeriod.Afternoon)}>After</button>
      </ButtonsWrapper>
    </SurfacePlaceholder>
  );
};

// Layers:
//
