# TP1-Architecture

## The application requirements:
- Mobile application.
- Must be responsive.
- Follows a TDD approach to catch bugs early on (ensure having high test coverage).
- Multiple views with complex operations(.
## The chosen architecture:
We opt for the **MVVM(Model-View-View-Model)** architecture to meet all the application requirements. **but why MVVM ?**.  
First of all, the *ease of testing*, MVVM pattern should break the coupling between the application logic and the UI and so make testing more accessible. It shouldn't be necessary to do all testing via the UI and so tests become quicker and easier to set up and run.  
Secondly, the *ease of maintainability*, MVVM pattern is based on a separation between the different parts of an app's code that it brings a level of structure and uniformity.  It's easy to see where to add logic and what existing one do. It also encourages the use of other patterns (dependency inversion, services, messaging, etc.) and so brings the benefits of good development practices.  
Thirdly, the *UI updates*, MVVM pattern is all about bindings that simplify many of the challenges of manipulating data, capturing entered data, and monitoring changes. It gives a huge control on the view. It also eliminates the need redesign because it separates the user interface from application logic thus upgrading involves minimal effort.  
Generally MVVM pattern empowers:
- Seperation of concerns.
- Speed and performance enhancements.
- Faster screen saving/loading.
- Smartphone and tablet access.
...

## The chosen technologie:
[Angular](https://angular.io/)
<img widh="50" height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" />
<br/>
Angular framework is embedded with an MVVM software architectural setup. 
Its framework uses the MVVM architecture and supports two-way data binding between View and ViewModel. This allows the automatic propagation to change within ViewModel’s state to the view. Typically, ViewModel uses the observer model to inform changes to the ViewModel model to model.
Angular ensures easy development as it eliminates the need for unnecessary code. Directives can be managed by some other teams as these are not part of app code. All in all, less coding along with lighter and faster apps.
