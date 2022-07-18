package io.dndserv_enn.ltc;

import android.app.AlertDialog;
import android.app.DownloadManager;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import com.android.volley.BuildConfig;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.ui.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {

    private RequestQueue requestQueue;
    private String currentV=new String();
    private  String serverV = new String();
    private  MainActivity activityM;
    private String appPackageName;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
      currentV = BuildConfig.VERSION_NAME;
    requestQueue = Volley.newRequestQueue(MainActivity.this);
      activityM = this;
      appPackageName = getPackageName();

    fetchData( );

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }


 void fetchData( ) {

//    String url = "https://primaire.educo-solution.com/api/mobile-version-prod-api";
     String url = "https://demo.educo-solution.com/api/mobile-version-prod-en-api";
     JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
         @Override
         public void onResponse(JSONObject response) {
             try {
                 System.out.println("response 1   "+response);
                 serverV = response.getString("serverV");
                 System.out.println("response 2  "+ (!currentV.equals(serverV )));

                 if (!currentV.equals(serverV )){
                     AlertDialog.Builder alertDialog = new AlertDialog.Builder(activityM);
                     alertDialog.setTitle("Important mise à jour de l'application");
                     alertDialog.setMessage("Mettre à jour l'application Educo");
                    alertDialog.setPositiveButton("Télécharger", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialogInterface, int i) {
                            System.out.println("https://play.google.com/store/apps/details?id=" + appPackageName);
                            startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("https://play.google.com/store/apps/details?id=" + appPackageName)));
                        }
                    });

                    alertDialog.setNegativeButton("Fermer", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialogInterface, int i) {
                            Toast.show(MainActivity.this,"Mise à jour annuler ",10);
                        }
                    });

                    alertDialog.show();
                 }
             }catch (JSONException e){
                 System.out.println("JSONException  "+e);
             }


         }
     }, new Response.ErrorListener() {
         @Override
         public void onErrorResponse(VolleyError error) {
             System.out.println("error " + error.getMessage());

             Toast.show(MainActivity.this, error.getMessage(), 10);
         }

     });
     requestQueue.add(jsonObjectRequest);
 }
}