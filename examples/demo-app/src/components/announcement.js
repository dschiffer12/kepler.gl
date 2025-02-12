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
import styled from 'styled-components';

const StyledText = styled.div`
  font-size: 12px;
`;

const StyledLink = styled.a`
  text-decoration: underline !important;
  color: white !important;
  font-weight: 500;
  margin-left: 8px;

  :hover {
    cursor: pointer;
  }
`;

const DisableBanner = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

// We are using the link to make sure users who have seen
// previous banners can see this one because we check localstorage key
export const FormLink = 'https://shan990829.typeform.com/to/RbCAXt';

const Announcement = ({onDisable}) => (
  <StyledText>
    <span>
      Kepler.gl turns two years old! Help our open source community by taking this 5-minute-survey
      and get a chance to win a <b>$100 Amazon gift card</b>. Make your answers count!
    </span>
    <StyledLink target="_blank" href={FormLink}>
      Take the survey
    </StyledLink>
    {onDisable ? (
      <DisableBanner>
        <StyledLink onClick={onDisable}>Already provided my feedback!</StyledLink>
      </DisableBanner>
    ) : null}
  </StyledText>
);

export default Announcement;
