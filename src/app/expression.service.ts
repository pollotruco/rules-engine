
import { Injectable } from '@angular/core';
import { RuleExpression, RuleExpressionOperator } from './rules.entity';

@Injectable({ providedIn: 'root' })
export class ExpressionsService {
    constructor() { }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    emptyExpression() {
        let emptyExpression: RuleExpression = {
            uuid: this.uuid(),
            field: null,
            operator: <RuleExpressionOperator>{},
            value: null
        }
        return new Map(Object.entries(emptyExpression));
    }
    emptyGroup() {
        return new Set().add(this.emptyExpression());
    }
    
}