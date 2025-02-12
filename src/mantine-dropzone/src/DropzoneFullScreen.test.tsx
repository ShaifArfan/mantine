import { tests } from '@mantine/tests';
import {
  DropzoneFullScreen,
  DropzoneFullScreenProps,
  DropzoneFullScreenStylesNames,
} from './DropzoneFullScreen';

const defaultProps: DropzoneFullScreenProps = {
  onDrop: () => {},
  withinPortal: false,
};

describe('@mantine/dropzone/DropzoneFullScreen', () => {
  tests.itSupportsSystemProps<DropzoneFullScreenProps, DropzoneFullScreenStylesNames>({
    component: DropzoneFullScreen,
    props: defaultProps,
    children: true,
    extend: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dropzone/DropzoneFullScreen',
    stylesApiSelectors: ['fullScreen'],
    selector: '.mantine-DropzoneFullScreen-fullScreen',
  });
});
