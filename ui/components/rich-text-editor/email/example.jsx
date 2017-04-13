// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Demo, RichTextEditor, RteToolbar, RteFormatFont, RteFormatText, RteFormatColor, RteFormatBody, RteAlignText, RteInsertContent, RteTextarea, RteClearFormatting } from '../base/example';
import { Tooltip } from '../../tooltips/base/example';
import classNames from 'classnames';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
      <Demo>
        <RichTextEditor>
          <RteToolbar>
            <RteFormatFont />
            <RteFormatText tabIndexSetting="-1" />
            <RteFormatColor />
            <RteFormatBody />
            <RteAlignText />
            <RteInsertContent />
            <RteClearFormatting />
          </RteToolbar>

          <RteTextarea placeholder="Compose Email..." />
        </RichTextEditor>
      </Demo>
);