import { Component, OnInit, VERSION } from "@angular/core";
import { IRule, IRuleContition } from "./rules.entity";
import { RulesService } from "./rules.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "RULE ENGINE (POC)";
  rules = [<IRule>{}];
  conditions = new Set();
  constructor(private service: RulesService) {}

  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.rules = data as [IRule];
      // console.log(this.rules[0]);
    });

    this.service.getRawData().subscribe(data => {
      console.log("parsed from database ");
      this.parse(data);
    });
  }



  parse(raw) {
    let parsed_rules = [];
    let rule: IRule;
    raw.map(r => {
      rule = <IRule>{};
      rule.name = r.name;
      rule.expiration_date = r.expiration_date;

      let conditions = r.conditions.split("|");
      rule.conditions = [];
      conditions.map(expr => {
        let expression = expr.split(",");
        if (expression.length === 1) {
          rule.conditions.push({
            operator: expression[0],
            joiner: true
          } as IRuleContition);
        } else if (expression.length === 3) {
          rule.conditions.push({
            field: expression[0],
            operator: expression[1],
            value: expression[2],
            joiner: false
          } as IRuleContition);
        }
      });

      rule.highlights = r.highlights.split("|");

      parsed_rules.push(rule);
    });
    console.log(parsed_rules);
  }
}
