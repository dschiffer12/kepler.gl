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

/* eslint-disable guard-for-in */

/**
 *
 * @param {Object} updateTriggers {getPosition: {column}, getData: {filteredIndex}}
 * @param {Object} oldUpdateTriggers
 * @returns {boolean|object} `false` if nothing changed, or `triggerChanged` as an object
 */
export function diffUpdateTriggers(updateTriggers, oldUpdateTriggers = {}) {
  const triggerChanged: {[key: string]: true} = {};
  let reason: boolean | {[key: string]: true} = false;

  for (const triggerName in updateTriggers) {
    const newTriggers = updateTriggers[triggerName] || {};
    const oldTriggers = oldUpdateTriggers[triggerName] || {};
    const diffReason = compareUpdateTrigger(newTriggers, oldTriggers, triggerName);

    if (diffReason) {
      triggerChanged[triggerName] = true;
      reason = triggerChanged;
    }
  }

  return reason;
}

function compareUpdateTrigger(newTriggers, oldTriggers, triggerName) {
  if (typeof oldTriggers !== 'object') {
    return oldTriggers === newTriggers ? null : `${triggerName} changed shallowly`;
  }

  for (const key in oldTriggers) {
    if (!(key in newTriggers)) {
      return `${triggerName}.${key} deleted`;
    }

    // shallow compare
    if (oldTriggers[key] !== newTriggers[key]) {
      return `${triggerName}.${key} changed shallowly`;
    }
  }

  for (const key in newTriggers) {
    if (!(key in oldTriggers)) {
      return `${triggerName}.${key} added`;
    }
  }

  return null;
}
