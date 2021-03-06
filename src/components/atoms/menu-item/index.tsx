import { Link } from 'wjhm';

import { MenuItem } from 'wjhmtypes';

const Item = ({ label, url }: MenuItem) => <Link href={url}>{label}</Link>;

export default Item;
