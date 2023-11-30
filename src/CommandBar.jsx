import * as React from 'react';
import { CommandBar} from '@fluentui/react/lib/CommandBar';


const CommandBar = () => {
    return (
      //create a command bar with 3 buttons on the middle
        <CommandBar
            items={[
            {
                key: 'newItem',
                text: 'Item nuevo',
                iconProps: { iconName: 'Add' },
                href: 'https://www.google.com',
            },
            {
                key: 'upload',
                text: 'Subir',
                iconProps: { iconName: 'Upload' },
                href: 'https://www.google.com',
            },
            {
                key: 'share',
                text: 'Compartir',
                iconProps: { iconName: 'Share' },
                onClick: () => console.log('Share'),
            },
            ]}
            ariaLabel="Use left and right arrow keys to navigate between commands"
        />
    );
  };
  
  export default CommandBar; 


