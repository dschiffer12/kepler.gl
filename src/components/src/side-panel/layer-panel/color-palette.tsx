// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import {HexColor, RGBColor} from '@kepler.gl/types';
import styled from 'styled-components';
import classnames from 'classnames';

type ColorPaletteProps = {
  colors: RGBColor | HexColor[];
  height?: number;
  className?: string;
  isSelected?: boolean;
  isReversed?: boolean;
};

const defaultProps = {
  height: 10,
  colors: [],
  className: '',
  isSelected: false,
  isReversed: false
};

const PaletteWrapper = styled.div.attrs({
  className: 'color-range-palette__inner'
})`
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  overflow: hidden;
`;

const PaletteContainer = styled.div.attrs(props => ({
  className: classnames('color-range-palette', props.className)
}))<{isSelected?: boolean}>`
  display: flex;
  flex-grow: 1;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isSelected ? '#FFFFFF' : 'transparent')};
  padding: 4px;
  border-radius: 4px;
`;

const StyledColorBlock = styled.div.attrs({
  className: 'color-range-palette__block'
})`
  flex-grow: 1;
`;

const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  height,
  className,
  isSelected,
  isReversed
}) => (
  <PaletteContainer className={className} isSelected={isSelected}>
    <PaletteWrapper style={{height, transform: `scale(${isReversed ? -1 : 1}, 1)`}}>
      {colors.map((color: number | string, index: number) => (
        <StyledColorBlock key={`${color}-${index}`} style={{backgroundColor: String(color)}} />
      ))}
    </PaletteWrapper>
  </PaletteContainer>
);

ColorPalette.defaultProps = defaultProps;

export default ColorPalette;
