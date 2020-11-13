export interface IRule {
  name: string;
  expiration_date: Date;
  conditions: IRuleContition[];
  highlights: string[];
}
export interface IRuleContition {
  field?: string;
  operator: string;
  value?: string;
  joiner?: boolean
}

// NEW FLOW
export interface RuleExpression {
    uuid: string;
    field: string;
    operator: RuleExpressionOperator
    value: string;
}
export interface RuleExpressionOperator {
    name: string;
    multipleValues: boolean;
    hideValue: boolean;
}