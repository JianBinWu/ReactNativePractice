//
//  AppDelegate.swift
//  SwiftTest
//
//  Created by user on 2020/12/28.
//

import UIKit
import React


@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")

        let rootView = RCTRootView(
            bundleURL: jsCodeLocation!,
            moduleName: "App",
            initialProperties: nil,
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view = rootView
        self.window = UIWindow(frame: UIScreen.main.bounds)
        self.window?.backgroundColor = UIColor.white
        self.window?.rootViewController = vc
        self.window?.makeKeyAndVisible()
        return true
    }


}

