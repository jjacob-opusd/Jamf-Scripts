export type ConfigurationProfile = {
	general: {
		id: number;
		name: string;
		description: null;
		level: string;
		site: {
			id: number;
			name: string;
		};
		category: {
			id: number;
			name: string;
		};
		payloads: string;
	};
	scope: {
		all_mobile_devices: boolean;
		all_jss_users: boolean;
		mobile_devices: null;
		buildings: null;
		departments: null;
		mobile_device_groups: null;
		jss_users: null;
		jss_user_groups: null;
		limitations: Limitations;
		exclusions: Limitations;
	};
	self_service: any;
};

type Limitations = {
	users: null;
	user_groups: {
		user_group:
			| {
					name: string;
			  }
			| Array<{
					name: string;
			  }>;
	} | null;
	network_segments: null;
	ibeacons: null;
};

export type DeviceConfiguration = {
	xml: {
		'@version': number;
		'@encoding': string;
	};
	configuration_profile: ConfigurationProfile;
	mobile_device_application: ConfigurationProfile;
	os_x_configuration_profile: ConfigurationProfile;
	policy: ConfigurationProfile;
};
