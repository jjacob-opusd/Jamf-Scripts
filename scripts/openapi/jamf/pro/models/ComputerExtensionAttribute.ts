/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ComputerExtensionAttribute = {
    /**
     * An identifier of extension attribute definition.
     */
    definitionId?: string;
    /**
     * A human-readable name by which attribute can be referred to.
     */
    readonly name?: string;
    /**
     * An additional explanation of exact attribute meaning, possible values, etc.
     */
    readonly description?: string | null;
    readonly enabled?: boolean;
    readonly multiValue?: boolean;
    /**
     * A value of extension attribute, in some rare cases there may be multiple values present, hence the array.
     *
     */
    values?: Array<string> | null;
    /**
     * A data type of extension attribute.
     */
    readonly dataType?: 'STRING' | 'INTEGER' | 'DATE_TIME' | null;
    /**
     * A closed list of possible values (applies to `popup` input type).
     *
     */
    readonly options?: Array<string> | null;
    /**
     * The input method. `text` is most common and means simply free text, `popup` i a closed list of values from
     * which one or many can be selected and `script` value is calculated and can never be set directly.
     *
     */
    readonly inputType?: 'TEXT' | 'POPUP' | 'SCRIPT' | 'LDAP' | null;
};

