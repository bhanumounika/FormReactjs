import React from 'react'
import { TextField,ITextFieldStyles } from '@fluentui/react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };
const stackTokens = { childrenGap: 15 };

function enterText(){
    return  (
        <Stack tokens={stackTokens}>
    <TextField styles={textFieldStyles}></TextField>
    </Stack>
    )
}

export default enterText;