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

import {createSelector} from 'reselect';

// NOTE: default formats must match file-handler-test.js
const DEFAULT_FILE_EXTENSIONS = ['csv', 'json', 'geojson'];
const DEFAULT_FILE_FORMATS = ['CSV', 'Json', 'GeoJSON'];

export const getFileFormatNames = createSelector(
  // @ts-expect-error
  state => state.loaders,
  loaders => [...DEFAULT_FILE_FORMATS, ...loaders.map(loader => loader.name)]
);

export const getFileExtensions = createSelector(
  // @ts-expect-error
  state => state.loaders,
  loaders => [...DEFAULT_FILE_EXTENSIONS, ...loaders.flatMap(loader => loader.extensions)]
);
