/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

const storageKey = 'mainWorkspace';

/**
 * Saves the state of the workspace to browser's local storage.
 * @param {Blockly.Workspace} workspace Blockly workspace to save.
 */
export const save = function(workspace) {
  const data = Blockly.serialization.workspaces.save(workspace);
  window.localStorage?.setItem(storageKey, JSON.stringify(data));
};

/**
 * Loads saved state from local storage into the given workspace.
 * @param {Blockly.Workspace} workspace Blockly workspace to load into.
 */
export const load = function(workspace) {
  const initial = '{"blocks":{"languageVersion":0,"blocks":[{"type":"print_text","id":"Y=DNY!R3o%N!h~1*2GUQ","x":238,"y":111,"inputs":{"VALUE":{"block":{"type":"text","id":"p1$B3D1o~R)}BxR!xQfD","fields":{"TEXT":"Es funktioniert!"}}}}}]},"variables":[{"name":"count","id":"n?kT@:w.=U*R8$T7pUqf"}]}';
  const data = window.localStorage?.getItem(storageKey);
  if (!data) data = initial;

  // Don't emit events during loading.
  Blockly.Events.disable();
  Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);
  Blockly.Events.enable();
};
