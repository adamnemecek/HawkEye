import * as React from 'react';

import { Btn } from 'View/Ui/Index';

interface INotificationFilterStringFilterProps
{
  stringFilters: IGitHubNotificationFilterSetStringFilter[];

  className?: string;

  getTitle(): string;

  getFilterTitle(filter: IGitHubNotificationFilterSetStringFilter): string;
};

class NotificationFilterStringFilter extends React.Component<INotificationFilterStringFilterProps, any>
{
  render()
  {
    return (
      <div className={this.props.className}>
        <div className="soft-delta soft-zeta--bottom">
          <label className="text--zeta">{this.props.getTitle()}</label>
        </div>
        {this.props.stringFilters
             .map(filter =>
             (
               <div key={filter.name}
                    className="soft-delta--right push-iota--bottom">
                 <Btn className="btn--hard-right btn--pill btn--pill-has-count"
                      onClick={() => {}}>
                  {this.props.getFilterTitle(filter)}
                  <span className="btn-pill__count">{filter.count}</span>
                 </Btn>
               </div>
             ))}
      </div>
    )
  }
};

export default NotificationFilterStringFilter;