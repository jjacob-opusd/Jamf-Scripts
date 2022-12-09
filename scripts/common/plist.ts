import plist from 'https://esm.sh/plist@3.0.6';

export function parsePlist(xml: string) {
	return plist.parse(xml) as any;
}
